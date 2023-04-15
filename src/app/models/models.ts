export class UserData {
    id: number;
    firstName: string;
    lastName: string;
    yearOfBirth: string;
    pesel: string;
    phonePrefix: string;
    phone: string;
    phone2Prefix: string;
    phone2: string;
    street: string;
    houseNo: string;
    flatNo: string;
    postCode: string;
    city: string;
    state: string;
    bloodType: BloodType | null;
    drugAllergies: string;
    foodAllergies: string;
    otherAllergies: string;
    chronicDiseasesCirculatorySystem: string;
    chronicDiseasesDigestiveSystem: string;
    chronicDiseasesRespiratorySystem: string;
    metabolicDiseases: string;
    kidneyDiseases: string;
    nervousSystem: string;
    neuromuscularSystem: string;
    liverDiseases: string;
    boneStructureDiseases: string;
    eyeDiseases: string;
    earDiseases: string;
    mentalDisorders: string;
    bloodDiseases: string;
    pastSurgeriesProcedures: string;
    autoimmuneDiseases: string;
    immunosuppressiveTreatments: string;
    pastCancer: string;
    currentCancer: string;
    implants: string;
    hiv: boolean;
    wzw: boolean;
    meds: string;
    additionalInfo: string;
    firstNameVisibility: boolean;
    lastNameVisibility: boolean;
    yearOfBirthVisibility: boolean;
    peselVisibility: boolean;
    phonePrefixVisibility: boolean;
    phoneVisibility: boolean;
    phone2PrefixVisibility: boolean;
    phone2Visibility: boolean;
    streetVisibility: boolean;
    houseNoVisibility: boolean;
    flatNoVisibility: boolean;
    postCodeVisibility: boolean;
    cityVisibility: boolean;
    stateVisibility: boolean;
    bloodTypeVisibility: boolean;
    drugAllergiesVisibility: boolean;
    foodAllergiesVisibility: boolean;
    otherAllergiesVisibility: boolean;
    chronicDiseasesCirculatorySystemVisibility: boolean;
    chronicDiseasesDigestiveSystemVisibility: boolean;
    chronicDiseasesRespiratorySystemVisibility: boolean;
    metabolicDiseasesVisibility: boolean;
    kidneyDiseasesVisibility: boolean;
    nervousSystemVisibility: boolean;
    neuromuscularSystemVisibility: boolean;
    liverDiseasesVisibility: boolean;
    boneStructureDiseasesVisibility: boolean;
    eyeDiseasesVisibility: boolean;
    earDiseasesVisibility: boolean;
    mentalDisordersVisibility: boolean;
    bloodDiseasesVisibility: boolean;
    pastSurgeriesProceduresVisibility: boolean;
    autoimmuneDiseasesVisibility: boolean;
    immunosuppressiveTreatmentsVisibility: boolean;
    pastCancerVisibility: boolean;
    currentCancerVisibility: boolean;
    implantsVisibility: boolean;
    hivVisibility: boolean;
    wzwVisibility: boolean;
    medsVisibility: boolean;
    additionalInfoVisibility: boolean;
    lastUpdated: Date;
    hash: string;
}

export class LoginModel {
    email: string;
    password: string;
}

export class LoginResponse {
    success: boolean;
    userId: number;
    shouldGoToFrom: boolean;
}

export enum BloodType {
    APlus = 0,
    BPlus = 1,
    ABPlus = 2,
    ZeroPlus = 3,
    AMinus = 4,
    BMinus = 5,
    ABMinus = 6,
    ZeroMinus = 7
}