import { DocumentTypes } from "./document-types.enum";
import { Role } from "./role.interface";
import { UserRole } from "./user-role.interface";

export interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  secondLastname?: string;
  email?: string;
  password?: string;
  phone?: string;
  documentNumber?: string;
  documentType?: DocumentTypes;
  registered?: string;
  enabled?: boolean;
  roles?: Role[];
  userRoles?: UserRole[];
  rucHost?: string;
  lastLogin?: string;
  genericClient?: string;
}
