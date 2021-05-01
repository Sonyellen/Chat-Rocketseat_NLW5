import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UserController } from "./controllers/UserController";
import { MessageController } from "./controllers/MessageController";

const routes = Router();

const settingsController = new SettingsController();
const userController = new UserController();
const messageController = new MessageController();


routes.post("/settings", settingsController.create);

routes.post("/user", userController.create);

routes.post("/message", messageController.create);
routes.get("/message:id", messageController.showByUser);
 
export { routes };