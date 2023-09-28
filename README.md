This is a Proof of Concept (POC) to demonstrate the use of blockchain technology, even for users who are not aware of blockchain.
This POC has been primarily conducted with a focus on the management of the Private Key.

유저가 블록체인을 몰라도 블록체인 기술을 사용할 수 있는지에 대한 POC입니다.
본 POC는 Private Key에 대한 관리를 중점으로 진행되었습니다.


## Principle (원리)

![image](https://github.com/aiiiden/potential-poc/assets/65929678/61360cf1-2274-4fae-9d19-333f9d73426f)


Creating a blockchain account requires the storage of a Private Key (PK). However, storing the PK in a database or similar repository poses a significant security risk. To address this, I encrypt the PK using AES encryption. This ensures that even if a third party steals the database data, they cannot use it. Each time a user takes a specific blockchain action, the AES is decrypted to execute the necessary logic.

블록체인 Account를 생성하는데에는 Private Key(PK)를 저장해야 합니다. 하지만, PK를 Database와 같은 저장소에 저장하는 것은 큰 보안적 위험이 따릅니다. 따라서, 저는 이 PK를 AES 대칭키 보안방식을 통해 암호화하여, 제 3자가 Database의 데이터를 탈취하여도 사용할 수 없도록 합니다. 사용자가 특정 블록체인 액션을 취할때 마다 AES를 복호화하여 필요한 로직을 작동시킵니다.

## Effect (효과)

The encrypted Private Key (PK) is stored on the server, and the user-designated password is held by the user. This setup allows the server to securely execute blockchain logic by continually prompting the user for the password.
Users can easily access the necessary blockchain technology in the service without the process of installing a separate wallet client.  

이렇게 암호화된 Private Key(PK)는 서버에 저장되며, 유저가 지정한 Password는 유저가 가지게 됩니다. 이렇게 되면, 서버는 유저에게 Password를 계속 물어보는 방식으로 안전하게 블록체인 로직을 실행하게 됩니다.   

유저는 따로 지갑 클라이언트를 설치하는 과정없이 서비스에서 필요한 블록체인 기술에 쉽게 접근이 가능합니다.


## Limitations (제한 사항)

In reality, a database should be used, but due to a lack of backend resources, client storage (such as local storage) is substituted ONLY in this POC project.

실제로는 Database를 사용해야 하나, 백엔드 리소스가 없기 때문에 본 POC에서는 클라이언트 storage (localstorage) 등으로 대체합니다.

## Stack (스택)

- Typescript Next.js (App router)
- Viem
- Tailwind

## Security Considerations (보안적 고려사항)

Security is a paramount aspect when utilizing blockchain technology. This project needs to consider several key security aspects.

보안은 블록체인 기술 활용 시 중요한 측면 중 하나입니다. 이 프로젝트에서는 몇 가지 주요 보안 측면을 고려할 필요가 있습니다.

### Encryption:

Safe storage of the Private Key is crucial. While the use of AES encryption is proposed, the strength of the encryption method used and key management practices are also vital. Thorough management and monitoring are essential to prevent key leakage.  

Private Key의 안전한 저장은 중요합니다. AES 암호화 사용이 제안되었지만, 사용된 암호화 방식의 강도와 키 관리 방법도 중요합니다. 키가 유출되지 않도록 철저한 관리와 모니터링이 필요합니다.

### Two-Factor Authentication (2FA):

Combining passwords with OTP enhances the security of user accounts. This makes unauthorized access more difficult, bolstering user authentication safety.  

비밀번호와 OTP를 결합한 이중 인증은 사용자 계정의 보안을 강화할 수 있습니다. 이는 비인가 접근을 어렵게 만들고, 사용자 인증의 안전성을 높입니다.

### Access Control:

Access to servers and databases must be strictly limited. Adhere to the principle of least privilege, and deactivate unnecessary services and ports.  

서버와 데이터베이스에 대한 접근은 엄격하게 제한되어야 합니다. 최소 권한 원칙을 따라야 하며, 불필요한 서비스와 포트는 비활성화되어야 합니다.

### User PK Management:

It's important to provide options and guidelines for users to manage their Private Key safely. Offer clear instructions for Private Key backup and recovery.  

사용자가 자신의 Private Key를 안전하게 관리할 수 있는 옵션과 지침을 제공하는 것도 중요합니다. 사용자에게 Private Key 백업과 복구에 대한 명확한 지침을 제공해야 합니다.

## Demo

Deployed by vercel.

https://potential-poc.vercel.app/
