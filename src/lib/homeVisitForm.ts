import { PATIENT_REQUIREMENT_OPTIONS } from "./constants";

export interface HomeVisitFormData {
  name: string;
  phone: string;
  location: string;
  requirement: string;
}

export function getPatientRequirementLabel(value: string): string {
  const option = PATIENT_REQUIREMENT_OPTIONS.find((item) => item.value === value);
  return option?.label ?? value;
}

export function validateHomeVisitFormData(
  formData: HomeVisitFormData
): string | null {
  if (!formData.name.trim()) return "Please enter your name.";
  if (!formData.phone.trim()) return "Please enter your phone number.";
  if (!formData.location.trim()) return "Please enter your location.";
  if (!formData.requirement.trim()) return "Please select a patient requirement.";
  return null;
}

export function buildHomeVisitEmailPayload(formData: HomeVisitFormData) {
  return {
    name: formData.name.trim(),
    phone: formData.phone.trim(),
    location: formData.location.trim(),
    requirement: getPatientRequirementLabel(formData.requirement.trim()),
  };
}
