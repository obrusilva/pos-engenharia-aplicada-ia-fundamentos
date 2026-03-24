import test from 'node:test'
import assert from 'node:assert/strict'
import { createServer } from '../src/server.ts'

test('command upper transforme mensagem em UPPERCASE', async () => {
    
    const app = createServer( )
    const msg = 'Transforme essa mensagem em UPPERCASE, por favor '
    const expected = msg.toUpperCase()
    const response = await app.inject({
        method: 'POST',
        url: '/chat',
        body:{ question:msg}
    })
    assert.equal(response.statusCode, 200)
    assert.equal(response.body, expected) 
})


test('command lower transforme mensagem em LOWERCASE', async () => {
    
    const app = createServer( )
    const msg = 'TRANSFORME ESSA MENSAGEM EM LOWERCASE'
    const expected = msg.toLowerCase()
    const response = await app.inject({
        method: 'POST',
        url: '/chat',
        body:{ question:msg}
    })
    assert.equal(response.statusCode, 200)
    assert.equal(response.body, expected) 
})