import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the user',
    type: String,
    format: 'email',
    example: 'iury2002silva@hotmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'The name of the user',
    type: String,
    example: 'Iury Silva',
  })
  name: string;

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    example: '123456',
  })
  password: string;
}
