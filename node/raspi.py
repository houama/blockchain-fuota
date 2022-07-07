import streamlit as st
import os
import json
from web3 import Web3
from dotenv import load_dotenv
import ipfsApi

load_dotenv()

CONTRACT_ADDR=os.getenv('CONTRACT_ADDR')
NODE_ADDR=os.getenv('NODE_ADDR')
PRIVATE_KEY=os.getenv('PRIVATE_KEY')

contract_abi = json.load(open('./artifacts/contracts/Fuota.json'))

w3 = Web3(Web3.HTTPProvider(os.getenv('PROVIDER_URL')))

contract = w3.eth.contract(address=CONTRACT_ADDR,abi=contract_abi['abi'])

api = ipfsApi.Client('192.168.123.17', 5001)


def request_update(): 
     data = contract.functions.requestUpdate().call()
     return data

st.write("""
# Remote Update Blockchain-based
Cek ketersediaan update terbaru sekarang!
""")

if st.button('Cek update'):
    data = request_update()

    st.write('Mendapatkan update baru!')
    st.write('Publisher: ' + data[0])
    st.write('Version: ' + data[1])
    st.write('CID: ' + data[2])

if st.button('Verifikasi'):
    data = request_update()

    verify = contract.functions.verificationFromDevice(data[2]).call({'from': NODE_ADDR})

    if verify[1] == NODE_ADDR:
        st.write("Device status: VALID")
    
    if verify[0] == True:
        st.write("CID status: VALID")

    # ipfsFile = api.get(data[2])

    # st.write(api.id())

    # st.download_button(
    #  label="Download file",
    #  data=ipfsFile,
    #  file_name='updated_file',
    #  mime='text',
    # )








# import streamlit as st
# import os
# import json
# from web3 import Web3
# from dotenv import load_dotenv

# load_dotenv()

# CONTRACT_ADDR=os.getenv('CONTRACT_ADDR')
# NODE_ADDR=os.getenv('NODE_ADDR')
# PRIVATE_KEY=os.getenv('PRIVATE_KEY')

# contract_abi = json.load(open('./artifacts/contracts/Fuota.json'))

# w3 = Web3(Web3.HTTPProvider(os.getenv('PROVIDER_URL')))

# contract = w3.eth.contract(address=CONTRACT_ADDR,abi=contract_abi['abi'])

# st.write("""
# # Remote Update Blockchain-based
# Cek ketersediaan update terbaru sekarang!
# """)

# if st.button('Cek update'):
#     data = contract.functions.requestUpdate().call()

#     st.write('Mendapatkan update baru!')
#     st.write(data)

#     if st.button('Verifikasi'):
#         nonce = w3.eth.getTransactionCount(NODE_ADDR)
#     gasPrice = w3.eth.gas_price
#     tx = contract.functions.verificationFromDevice().buildTransaction({
#         'chainId': 4227,
#         'gas': 0,
#         'gasPrice': gasPrice,
#         'from': NODE_ADDR,
#         'nonce': nonce
#     })
    
#     signed_tx = w3.eth.account.sign_transaction(tx, private_key=PRIVATE_KEY)
#     sent_tx = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
#     w3.eth.wait_for_transaction_receipt(sent_tx)







