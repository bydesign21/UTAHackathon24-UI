export const awsmobile = {
  aws_project_region: 'us-east-1',
  aws_cloud_logic_custom: [
    {
      name: 'HackUTACoreAPI',
      endpoint: 'https://n90u2ixssg.execute-api.us-east-1.amazonaws.com/dev',
      region: 'us-east-1',
    },
  ],
  aws_cognito_identity_pool_id:
    'us-east-1:db432721-56b6-4cce-9b62-f7b3425b9725',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_XodbxmgaM',
  aws_user_pools_web_client_id: '5bfrak6uk7afo4hkn6e53lcnp7',
  oauth: {},
  aws_cognito_username_attributes: ['EMAIL', 'PHONE_NUMBER'],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
  aws_user_files_s3_bucket: 'hackuta24141e1-dev',
  aws_user_files_s3_bucket_region: 'us-east-1',
};
