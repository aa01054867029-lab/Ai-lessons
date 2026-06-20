"""
Shared utilities for execution scripts.
Provides common helpers: .env loading, logging setup, and path resolution.
"""

import os
import sys
import logging
from pathlib import Path
from dotenv import load_dotenv

# ── Project root (one level up from execution/) ──
PROJECT_ROOT = Path(__file__).resolve().parent.parent
TMP_DIR = PROJECT_ROOT / ".tmp"

# ── Load .env from project root ──
load_dotenv(PROJECT_ROOT / ".env")


def get_env(key: str, required: bool = True) -> str | None:
    """
    Retrieve an environment variable.
    Raises RuntimeError if `required=True` and the variable is missing.
    """
    value = os.getenv(key)
    if required and not value:
        raise RuntimeError(
            f"Environment variable '{key}' is required but not set. "
            f"Add it to {PROJECT_ROOT / '.env'}"
        )
    return value


def setup_logger(name: str, level: int = logging.INFO) -> logging.Logger:
    """
    Create a consistently-formatted logger.
    """
    logger = logging.getLogger(name)
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stderr)
        formatter = logging.Formatter(
            "[%(asctime)s] %(name)s %(levelname)s: %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S",
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    logger.setLevel(level)
    return logger


def ensure_tmp_dir() -> Path:
    """
    Ensure .tmp/ exists and return its Path.
    """
    TMP_DIR.mkdir(parents=True, exist_ok=True)
    return TMP_DIR
