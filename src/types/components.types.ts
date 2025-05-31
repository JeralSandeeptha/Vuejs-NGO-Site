import type { Member } from "./inerface.types"

export type ButtonProps = {
    text: string,
    textColor: string,
    bgColor: string,
    closeNav: () => void,
}

export type MemberProps = {
    member: Member,
}