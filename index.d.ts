type e_employee = {
    id_employee: number
    id_registry: number
    id_position: number
    id_organizationGroupRegion: number
    firstName: string
    middleName: string | null
    lastName: string
    secondLastName: string | null
    shortName: string
    fullName: string
    nickname: string | null
    RFC: string | null
    CURP: string | null
    IMSS: string | null
    civilStatus: string | null
    nationality: string | null
    phone: string | null
    birthday: Date | null
    id_gender: number
    bloodtype: string | null
    is_rehired: boolean
    date_rehired: Date | null
    is_referred: boolean
    date_referred: Date | null
    id_referredBy: number | null
    is_rep: boolean
    is_trainee: boolean
    is_newbie: boolean
    is_manager: boolean
    is_readyToTransfer: boolean
    is_propensityToLeave: boolean
    date_hire: Date
    date_lwd: Date | null
    id_site: number
    weeklyHours: number
    id_paytype: number
    id_outsource: number | null
    id_firstGeneration: number | null
    id_currentGeneration: number | null
    id_lob: number | null
    id_department: number | null
    id_area: number | null
    id_group: number | null
    id_supervisor: number | null
    id_qa_supervisor: number | null
    id_ods: number | null
    id_coach_support: number | null
    id_creator: number
    id_creator_pers: number
    id_editor: number
    id_editor_pers: number
    date_created: Date
    date_modified: Date
    is_active: boolean
    path_image: string
    mail: string | null
    cellphone: string | null
    zip_code: string | null
    address: string | null
    state: string | null
    country: string | null
    city: string | null
    id_organization: number | null
    id_organizationGroup: number | null
    id_hierarchy: number | null
    id_unit: number | null
    id_unit_paf: number | null
}

type searchEmployeeResults = Pick<e_employee, 'id_employee' | 'shortName' | 'path_image'>;