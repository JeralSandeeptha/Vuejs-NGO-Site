export interface Member{
    id?: string,
    name: string,
    position: string,
    image: string,
    social?: {
        facebook?: boolean,
        twitter?: boolean,
        linkedin?: boolean
    }
}