import type { Ref } from "vue";
import type { Member } from "./inerface.types"

export type GetAllMembersProps = {
    members: Ref<Member[]>;
}