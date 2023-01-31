import { IsNotEmpty } from 'class-validator'

export class CreateRegionDto {
    @IsNotEmpty()
    name: string
}
