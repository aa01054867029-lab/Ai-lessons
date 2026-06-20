# execution/create_ui_kit_extended.py
"""Script to extend the ComplyFlow UI Kit in Figma.

Prerequisites:
- `FIGMA_PERSONAL_ACCESS_TOKEN` set in `.env` or environment.
- `fileKey` of the project Figma file (`db4toOFLXGlhYUNH4CD1YT`).
- `figma-python` package (`pip install figma-python`).

The script follows the approved implementation plan:
1. Load the Figma file.
2. Ensure a SectionNode named "UI Kit — extended" exists next to "Foundation".
3. Create the eight new components in three batches.
4. Verify each component after creation.
5. Save screenshots of each batch to `ds/.tmp/figma_batch_<n>.png`.
"""

import os
import sys
from pathlib import Path

# Import the Figma client – placeholder; replace with actual SDK import.
try:
    from figma import FigmaClient
except ImportError:
    print("Figma client library not installed. Install with `pip install figma-python`.")
    sys.exit(1)

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
FILE_KEY = "db4toOFLXGlhYUNH4CD1YT"
TOKEN = os.getenv("FIGMA_PERSONAL_ACCESS_TOKEN")
if not TOKEN:
    print("Error: FIGMA_PERSONAL_ACCESS_TOKEN not set in environment.")
    sys.exit(1)

client = FigmaClient(access_token=TOKEN)

# Helper utilities -----------------------------------------------------------
def get_page_by_name(name: str):
    """Return the page node with the given name or None."""
    for page in client.file_pages(FILE_KEY):
        if page.name == name:
            return page
    return None

def find_section_node(page, section_name: str):
    """Search for a SectionNode (frame) by name inside a page."""
    for node in client.file_nodes(FILE_KEY, ids=[page.id]):
        if node.type == "SECTION" and node.name == section_name:
            return node
    return None

def create_extended_section(foundation_node):
    """Create the `UI Kit — extended` SectionNode next to the Foundation node."""
    ext = client.create_section(file_key=FILE_KEY, name="UI Kit — extended")
    # Position it 80px to the right of the foundation node.
    ext.x = foundation_node.x + foundation_node.width + 80
    ext.y = foundation_node.y
    client.update_node(file_key=FILE_KEY, node_id=ext.id, properties={"x": ext.x, "y": ext.y})
    return ext

def bind_variable(paint, field, var_name):
    """Bind a paint object to a variable by name."""
    var = next((v for v in client.get_local_variables(FILE_KEY) if v.name == var_name), None)
    if not var:
        raise ValueError(f"Variable {var_name} not found in the file.")
    bound = client.set_bound_variable_for_paint(paint, field, var.id)
    return bound

def create_component_set(component_def: dict, parent_id: str):
    """Create a ComponentSet (or Component) based on the supplied definition.
    The definition follows the markdown draft – keys: name, anatomy, variants, states, bindings.
    """
    # Create a basic frame that will become the component.
    frame = client.create_frame(file_key=FILE_KEY, name=component_def["name"])  # placeholder API
    # Apply auto‑layout, size, radius, fills, strokes according to `bindings`.
    # This part is highly simplified; actual implementation would iterate over anatomy layers.
    for binding in component_def.get("bindings", []):
        paint = {"type": "SOLID", "color": {"r": 0, "g": 0, "b": 0}}
        bound = bind_variable(paint, binding["field"], binding["variable"])
        # Apply the bound paint to the appropriate node – omitted for brevity.
        pass
    # Turn the frame into a component or component set.
    if component_def.get("variants"):
        # Create a component set with variants.
        comp_set = client.create_component_set(file_key=FILE_KEY, node_ids=[frame.id])
        client.combine_as_variants(file_key=FILE_KEY, component_ids=[frame.id], parent_id=parent_id)
        return comp_set
    else:
        comp = client.create_component(file_key=FILE_KEY, node_id=frame.id)
        return comp

def verify_component(name: str) -> bool:
    """Read‑only verification of a component existence and variable bindings."""
    nodes = client.search_nodes(FILE_KEY, query=name)
    for n in nodes:
        if n.type in {"COMPONENT", "COMPONENT_SET"} and n.name == name:
            # Verify text styles
            for t in client.get_text_nodes(FILE_KEY, node_id=n.id):
                if not getattr(t, "textStyleId", None):
                    print(f"[WARN] Text node in {name} missing textStyleId.")
                    return False
            # Verify bound variables for fills
            if getattr(n, "boundVariables", None) and n.boundVariables.get("fills"):
                return True
            else:
                print(f"[WARN] {name} has no bound fill variables.")
                return False
    print(f"[ERROR] Component {name} not found.")
    return False

def capture_screenshot(section_node_id: str, batch_index: int):
    """Save a screenshot of the given section node to the .tmp folder."""
    img_path = Path("ds/.tmp") / f"figma_batch_{batch_index}.png"
    client.export_node_png(FILE_KEY, node_id=section_node_id, output_path=str(img_path))
    return img_path

# ---------------------------------------------------------------------------
# Main execution
# ---------------------------------------------------------------------------

def main():
    print(f"Loading Figma file {FILE_KEY}...")
    file_meta = client.get_file_meta(FILE_KEY)
    if not file_meta:
        print("Unable to load the Figma file. Abort.")
        sys.exit(1)

    foundation_page = get_page_by_name("Foundation")
    if not foundation_page:
        print("Foundation page not found. Abort.")
        sys.exit(1)
    foundation_node = find_section_node(foundation_page, "Foundation")
    if not foundation_node:
        print("Foundation SectionNode not found. Abort.")
        sys.exit(1)

    ext_section = find_section_node(foundation_page, "UI Kit — extended")
    if not ext_section:
        print("Creating UI Kit — extended SectionNode...")
        ext_section = create_extended_section(foundation_node)
    else:
        print("UI Kit — extended SectionNode already exists.")

    # Component definitions (simplified for the demo)
    components = [
        {"name": "Table", "variants": ["Density=default", "Density=compact"],
         "bindings": [{"field": "fills", "variable": "surface-default"},
                      {"field": "strokes", "variable": "border-default"},
                      {"field": "text", "variable": "text-default"}]},
        {"name": "Sidebar", "bindings": [{"field": "fills", "variable": "surface-default"},
                        {"field": "strokes", "variable": "border-default"}]},
        {"name": "Dropdown", "variants": ["State=collapsed", "State=expanded"],
         "bindings": [{"field": "fills", "variable": "surface-default"},
                      {"field": "strokes", "variable": "border-default"}]},
        {"name": "Breadcrumb", "bindings": [{"field": "text", "variable": "text-link"}]},
        {"name": "Pagination", "bindings": [{"field": "fills", "variable": "surface-default"},
                         {"field": "text", "variable": "text-default"}]},
        {"name": "Toast", "variants": ["Type=success", "Type=error", "Type=warning"],
         "bindings": [{"field": "fills", "variable": "bg-success-subtle"},
                      {"field": "strokes", "variable": "bg-success"}]},
        {"name": "Textarea", "variants": ["State=default", "State=error"],
         "bindings": [{"field": "fills", "variable": "surface-default"},
                      {"field": "strokes", "variable": "border-default"}]},
        {"name": "Checkbox", "variants": ["Checked=unchecked", "Checked=checked"],
         "bindings": [{"field": "fills", "variable": "surface-default"},
                      {"field": "strokes", "variable": "border-default"}]},
    ]

    # Process in batches of up to 3 components
    batches = [components[i:i+3] for i in range(0, len(components), 3)]
    for idx, batch in enumerate(batches, start=1):
        print(f"--- Batch {idx} ---")
        for comp in batch:
            print(f"Creating component {comp['name']}...")
            create_component_set(comp, parent_id=ext_section.id)
        # Verification
        all_ok = True
        for comp in batch:
            ok = verify_component(comp['name'])
            all_ok = all_ok and ok
        # Screenshot
        screenshot = capture_screenshot(ext_section.id, idx)
        print(f"Batch {idx} screenshot saved to {screenshot}")
        if not all_ok:
            print(f"Verification failed in batch {idx}. Stopping.")
            sys.exit(1)
    print("All components created and verified successfully.")

if __name__ == "__main__":
    main()
