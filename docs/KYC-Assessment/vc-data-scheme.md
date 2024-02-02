---
sidebar_position: 4
---

# Verifiable Credentials Data Scheme/Model

The credentials to be issued in the first phase of the project, including those proposed for the second phase, are outlined in deliverable D2.1 Pilot UC Governance Framework. The first phase will focus on the company's legal existence as a KYB verifiable credential and the company representatives will be verified through the KYC process.

## KYC Check Credential

The following shows a W3V Verifiable Credential data model based on the verifications performed by ID verification companies. As a result, this data model shows a Verifiable Credential in a privacy preserving way (i.e. without PII).

```
{
   "@context": ["https://www.w3.org/2018/credentials/v1"],
   "type": ["VerifiableCredential", "VerifiableAttestation", "KycChecksCredential"],
   "credentialSubject": {
       "type": "KYC",
       "result": "SUCCESS",
       "date": "2023-07-10T14:45:10+02:00",
       "checks": [
           {
               "type": "PEP",
               "result": "SUCCESS",
               "date": "2023-07-10T14:45:10+02:00"
           },
           {
               "type": "AML",
               "result": "SUCCESS",
               "date": "2023-07-10T14:45:10+02:00"
           },
           {
               "type": "KYC",
               "result": "SUCCESS",
               "date": "2023-07-10T14:45:10+02:00"
           }
       ]
   },
   "id": "identity#KycCredential#3add94f4-28ec-42a1-8704-4e4aa51006b4",
   "issued": "2021-08-31T00:00:00Z",
   "issuer": {
       "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
       "image": {
           "id": "https://images.squarespace-cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w",
           "type": "Image"
       },
       "name": "CH Authority",
       "type": "Profile",
       "url": "https://images.squarespace-cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w"
   },
   "validFrom": "2021-08-31T00:00:00Z",
   "issuanceDate": "2021-08-31T00:00:00Z",
   "evidence": {
       "documentPresence": "Digital",
       "evidenceDocument": "KYC",
       "subjectPresence": "Physical",
       "type": "DocumentVerification",
       "verifier": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN"
   }
}

```

## KYC Data Credential

The following shows a W3V Verifiable Credential data model based on the verifications performed by ID verification companies. As a result, this data model shows a Verifiable Credential (i.e. incl. PII).

```
{
   "@context": ["https://www.w3.org/2018/credentials/v1"],
   "type": ["VerifiableCredential", "VerifiableAttestation", "KycDataCredential"],
   "credentialSubject": {
       "identificationprocess": {
           "agentname": "TROBOT",
           "companyId": "1234",
           "result": "SUCCESS",
           "identificationTime": "2023-07-10T14:45:10+02:00",
           "identificationId": "TST-ELXNG",
           "transactionNumber": "1234",
           "type": "APP"
       },
       "userData": {
           "dateOfBirth": "1993-04-08",
           "familyName": "DOE",
           "firstName": "Jane"
       },
       "identificationdocument": {
           "type": "IDCARD",
           "country": "DE",
           "validuntil": "2034-08-01",
           "number": "L01X00T27",
           "dateissued": "2021-08-31"
       },
       "performedKycChecks": {
           "livenessscreenshot": true,
           "securityfeaturevideo": true
       }
   },
   "id": "identity#KycCredential#3add94f4-28ec-42a1-8704-4e4aa51006b4",
   "issued": "2021-08-31T00:00:00Z",
   "issuer": {
       "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
       "image": {
           "id": "https://images.squarespace-cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w",
           "type": "Image"
       },
       "name": "CH Authori

```

## VerifiableID (EBSI)

The following shows a W3V Verifiable Credential data model based on the EBSI model for “Verifiable IDs”, which is the way identity credentials for identifications are introduced by the EBSI ecosystems.

```
{
 "@context": [
   "https://www.w3.org/2018/credentials/v1"
 ],
 "type": [
   "VerifiableCredential",
   "VerifiableAttestation",
   "VerifiableId"
 ],
 "credentialSchema": {
   "id": "https://api.preprod.ebsi.eu/trusted-schemas-registry/v1/schemas/0xb77f8516a965631b4f197ad54c65a9e2f9936ebfb76bae4906d33744dbcc60ba",
   "type": "FullJsonSchemaValidator2021"
 },
 "credentialSubject": {
   "currentAddress": [
     "1 Boulevard de la Liberté, 59800 Lille"
   ],
   "dateOfBirth": "1993-04-08",
   "familyName": "DOE",
   "firstName": "Jane",
   "gender": "FEMALE",
   "id": "did:ebsi:2AEMAqXWKYMu1JHPAgGcga4dxu7ThgfgN95VyJBJGZbSJUtp",
   "nameAndFamilyNameAtBirth": "Jane DOE",
   "personalIdentifier": "0904008084H",
   "placeOfBirth": "LILLE, FRANCE"
 },
 "evidence": [
   {
     "documentPresence": [
       "Physical"
     ],
     "evidenceDocument": [
       "Passport"
     ],
     "subjectPresence": "Physical",
     "type": [
       "DocumentVerification"
     ],
     "verifier": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN"
   }
 ],

 "id": "urn:uuid:3add94f4-28ec-42a1-8704-4e4aa51006b4",
 "issued": "2021-08-31T00:00:00Z",
 "issuer": "did:ebsi:2A9BZ9SUe6BatacSpvs1V5CdjHvLpQ7bEsi2Jb6LdHKnQxaN",
 "validFrom": "2021-08-31T00:00:00Z",
 "issuanceDate": "2021-08-31T00:00:00Z"
}

```
