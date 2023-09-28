This is a Proof of Concept (POC) to demonstrate the use of blockchain technology, even for users who are not aware of blockchain.
유저가 블록체인을 몰라도 블록체인 기술을 사용할 수 있는지에 대한 POC입니다.

## Principle (원리)
Creating a blockchain account requires the storage of a Private Key (PK). However, storing the PK in a database or similar repository poses a significant security risk. To address this, I encrypt the PK using RSA encryption. This ensures that even if a third party steals the database data, they cannot use it. Each time a user takes a specific blockchain action, the RSA is decrypted to execute the necessary logic. 

블록체인 Account를 생성하는데에는 Private Key(PK)를 저장해야 합니다. 하지만, PK를 Database와 같은 저장소에 저장하는 것은 큰 보안적 위험이 따릅니다. 따라서, 저는 이 PK를 RSA 대칭키 보안방식을 통해 암호화하여, 제 3자가 Database의 데이터를 탈취하여도 사용할 수 없도록 합니다. 사용자가 특정 블록체인 액션을 취할때 마다 RSA를 복호화하여 필요한 로직을 작동시킵니다.

## Limitations (제한 사항)
In reality, a database should be used, but due to a lack of backend resources, client storage (such as local storage) is substituted. 
실제로는 Database를 사용해야 하나, 백엔드 리소스가 없기 때문에 클라이언트 storage (localstorage) 등으로 대체합니다.

## Stack (스택)
- Typescript Next.js (App router)
- Viem
- Tailwind
