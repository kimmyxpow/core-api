import { IsNotEmpty } from 'class-validator'

export class CreateMachineDto {
    @IsNotEmpty()
    address: string

    @IsNotEmpty()
    room: string

    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    is_attendance: boolean
}
