import { Connect } from 'uport-connect'

const uport = new Connect('a12a', { network: 'rinkeby' });

uport.requestDisclosure({
  requested: ['name','country'],
  notifications: true
})
uport.onResponse('disclosureReq').then(payload => {
  const address = payload.address
})
