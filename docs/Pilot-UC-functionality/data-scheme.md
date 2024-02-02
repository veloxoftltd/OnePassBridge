---
sidebar_position: 5
---

# Verifiable Credentials Data Scheme publications

## KYC Data Credential

The following shows a W3V Verifiable Credential data model based on the verifications performed by ID
verification companies. As a result, this data model shows a Verifiable Credential (i.e. incl. PII).

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
        },
    },
    "id": "identity#KycCredential#3add94f4-28ec-42a1-8704-4e4aa51006b4",
    "issued": "2021-08-31T00:00:00Z",
    "issuer": {
    "id": "did:key:z6MkrHKzgsahxBLyNAbLQyB1pcWNYC9GmywiWPgkrvntAZcj",
    "image": {
        "id": "https://images.squarespace-
        cdn.com/content/v1/609c0ddf94bcc0278a7cbdb4/1660296169313-K159K9WX8J8PPJE005HV/Walt+Bot_Logo.png?format=100w",
        "type": "Image"
    },
    "name": "CH Authori
    }
}

```

## Legal Entity Json Schema

The following is the schema of an EBSI variable ID for a legal entity.

```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "EBSI Legal Entity Verifiable ID",
    "description": "Schema of an EBSI Verifiable ID for a legal entity",
    "type": "object",
    "allOf": [
    {
    "$ref": "../../../ebsi-attestation/2023-08/schema.json"
    },
    ]
    {
        "properties": {
            "credentialSubject": {
                "description": "Defines information about the subject that is described by the Verifiable ID",
                "type": "object",
                "properties": {
                "id": {
                    "description": "Defines the DID of the subject that is described by the Verifiable Attestation",
                    "type": "string",
                    "format": "uri"
                },
                "legalPersonIdentifier": {
                    "description": "National/Legal Identifier of Credential Subject (constructed by the sending Member State in accordance with the technical specifications for the purposes of cross-border identification and which is as persistent as possible in time)",
                    "type": "string"
                },
                "legalName": {
                    "description": "Official legal name of Credential Subject",
                    "type": "string"
                },
                "legalAddress": {
                    "description": "Official legal address of Credential Subject",
                    "type": "string"
                },
                "VATRegistration": {
                    "description": "VAT number of Credential Subject",
                    "type": "string"
                },
                "taxReference": {
                    "description": "Official tax reference number of Credential Subject",
                    "type": "string"
                },
                "LEI": {
                    "description": "Official legal entity identifier (LEI) of Credential Subject (referred to in Commission
                    Implementing Regulation (EU) No 1247/2012)",
                    "type": "string"
                },
                "EORI": {
                    "description": "Economic Operator Registration and Identification (EORI) of Credential Subject (referred to in Commission Implementing Regulation (EU) No 1352/2013)",
                    "type": "string"
                },
                "SEED": {
                    "description": "System for Exchange of Excise Data (SEED) of Credential Subject (i.e. excise number provided in Article 2(12) of Council Regulation (EC) No 389/2012)",
                    "type": "string"
                },
                "SIC": {
                    "description": "Standard Industrial Classification (SIC) of Credential Subject (Article 3(1) of Directive 2009/101/EC of the European Parliament and of the Council.)",
                    "type": "string"
                },
                "domainName": {
                    "description": "Domain name (website) of Credential Subject",
                    "oneOf": [
                    {
                        "type": "string",
                        "format": "uri"
                    },
                    {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "format": "uri"
                        }
                    }
                    ]
                }
            },
                "required": ["id", "legalName", "domainName"]
            }
        }
    }
}
```
