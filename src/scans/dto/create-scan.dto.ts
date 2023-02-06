import { IsNotEmpty, IsOptional } from 'class-validator'
import { Machine } from 'src/machines/entities/machine.entity'
import { User } from 'src/users/entities/user.entity'

export class CreateScanDto {
    @IsNotEmpty()
    rfid: string

    @IsNotEmpty()
    address: string

    @IsOptional()
    machine?: Machine

    @IsNotEmpty()
    date: string

    @IsOptional()
    user?: User
}
