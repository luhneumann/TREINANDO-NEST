import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        required: true,
        example: 'Maria Silva'
    })
    name: string;

    @ApiProperty({
        type: String,
        required: true,
        example: 'mariasilva@teste'
    })
    email: string;

    @ApiProperty({
        type: String,
        required: true,
        example: '35452175'
    })
    password: string;
}

