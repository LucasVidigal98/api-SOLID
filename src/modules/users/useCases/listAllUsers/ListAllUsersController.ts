import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users);
    } catch (err) {
      return response
        .status(400)
        .json({ error: "User not found or not admin" });
    }
  }
}

export { ListAllUsersController };
