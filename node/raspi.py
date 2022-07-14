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







