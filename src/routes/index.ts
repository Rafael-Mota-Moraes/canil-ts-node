import { Router } from "express";

import * as PageController from "../controllers/pageControllers";
import * as SearchCrontroller from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

router.get("/search", SearchCrontroller.search);

export default router;
