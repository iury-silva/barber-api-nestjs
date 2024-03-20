import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    description: 'The email of the user',
    type: String,
    format: 'email',
    example: 'isilva@imply.com',
  })
  email: string;
  @ApiProperty({
    description: 'The password of the user',
    type: String,
    example: 'imply1234',
  })
  password: string;
}
