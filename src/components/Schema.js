import * as yup from 'yup';

export const BookingSchema  = yup.object().shape({
    cardHolderName:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    cardNo:yup.number().min(1000000000000000,"Card number must be minimum 16 digit number").max(9999999999999999, "Card number must be a 16-digit number").required("Required"),
    cvv:yup.number().min(100,"CVV number must be minimum 3 digit number").max(999, "CVV number must be a 3-digit number").required("Required"),
    month:yup.string().required("Required"),
    year:yup.string().required("Required"),
    // aadhar:yup.number().min(100000000000,"Aadhaar number must be minimum 12 digit number").max(999999999999, "Aadhaar number must be a 12-digit number").required("Required"),
})

export const DocRegSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    city: yup.string().min(2,"Please enter a valid address").required("Required"),          
    specialization: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().required("Required"),
    experience:yup.number().min(2).positive().integer().required("Required"),
    pincode: yup.number().min(100000, "Pincode must be minimum 6-digit number").max(999999, "Pincode must be a 6-digit number").required("Required"),
    district: yup.string().min(2,"Please enter a valid address").required("Required"),          
    qualification: yup.string().required("Required"),          
    affiliationnumber: yup.string().required("Required"),          
    contact: yup.number().min(1000000000,"Phone number must be minimum 10 digit number").max(9999999999, "Phone number must be a 10-digit number").required("Required"),
    fromtime: yup.string().required("Required"), 
    totime: yup.string().required("Required"), 
    availabledays: yup.array().min(1, 'Select at least one available day').required("Required"),
    image: yup
    .mixed()
    .required('Please select an image') 
    .test(
      'fileSize',
      'Image size is too large (max 5 MB)',
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    ) //validation for maximum file size (5 MB)
    .test(
      'fileType',
      'Unsupported file format',
      (value) =>
        !value ||
        (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type))
    ), //validation for supported file formats

})

export const MedicineAddSchema  = yup.object().shape({
  name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
  manufacturer: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
  description: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
  price:yup.number().positive().integer().required("Required"),
  expiryDate:yup.string().required("Required"),
  dosage:yup.string().required("Required"),
  comments: yup.string(),          
  count: yup.number().min(0, 'Add the count').required("Required"),
  image: yup
  .mixed()
  .required('Please select an image') 
  .test(
    'fileSize',
    'Image size is too large (max 5 MB)',
    (value) => !value || (value && value.size <= 5 * 1024 * 1024)
  ) //validation for maximum file size (5 MB)
  .test(
    'fileType',
    'Unsupported file format',
    (value) =>
      !value ||
      (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type))
  ), //validation for supported file formats
  type: yup.string().required('Required'),  

})

