import {
  CreateUserAndProfileDTO,
  CreateUserDTO,
  UserResponseDTO,
} from "../../../domain/types/User.types";
import { UserRepository } from "../../../infra/repositories/prisma/User.repository";

export class CreateUser {
  
  async execute({
    name,
    email,
    username,
    password,
    avatarUrl,
    refreshToken, 
    accessToken,
  }: CreateUserAndProfileDTO): Promise<UserResponseDTO | null> {
    try {
      const userRepository = new UserRepository();

      const user = await userRepository.createUserAndProfile({
        name,
        email,
        username,
        password,
        avatarUrl,
        refreshToken, 
        accessToken
      });

      if (!user) {
        throw new Error("User not created");
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
