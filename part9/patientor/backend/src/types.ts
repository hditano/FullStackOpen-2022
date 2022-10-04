export interface Patients {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn?: string;
    gender: Gender
    occupation: string;
}

enum Gender {
     Male = 'male',
     Female = 'female',
     Other = 'other'
}

export type PatientsEntry = Omit<Patients, "ssn">;
export type NewPatient = Omit<Patients, 'id'>;