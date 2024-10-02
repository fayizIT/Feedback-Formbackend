import { IsNotEmpty, IsEmail, IsInt, Min, Max } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  contact: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  comments: string;
}
