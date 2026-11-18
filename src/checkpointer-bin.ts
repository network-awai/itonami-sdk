#!/usr/bin/env node
/**
 * itonami-checkpointer — sidecar launcher, re-export shim.
 *
 * The implementation relocated to `kotoba-lang/checkpointer` (physical
 * move, TS unchanged) per ADR-2607011830 / ADR-2606302300. This is a
 * side-effect import (not `export *`) because the relocated module runs
 * its `main()` at top level rather than exporting anything — that's what
 * this repo's own `bin` entry point needs to keep working.
 */
import "@itonami/checkpointer/checkpointer-bin";
