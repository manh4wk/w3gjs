/* global describe it */

const {expect} = require('chai')
const W3GReplay = require('../index')
const Parser = new W3GReplay()

describe('Replay parsing tests', () => {
  it('parses a replay with observers properly', () => {
    const test = Parser.parse(`./replays/observers.w3g`)

    expect(test.header.magic).to.equal('Warcraft III recorded game\u001a')
    expect(test.teams['24']).to.be.an('array')
    expect(test.teams['24']).to.have.lengthOf(4)
    expect(test.players['4'].name).to.equal('S.o.K.o.L')
    expect(test.players['4'].detectedRace).to.equal('O')
    expect(test.players['4'].color).to.equal('#50c878')
    expect(test.players['6'].name).to.equal('Stormhoof')
    expect(test.players['6'].detectedRace).to.equal('O')
    expect(test.players['6'].color).to.equal('#800000')
  })

  it('parses a netease replay properly', () => {
    const test = Parser.parse(`./replays/netease1.nwg`)
    expect(test.header.magic).to.equal('Warcraft III recorded game\u001a')
    expect(test.teams['24']).to.be.an('array')
    expect(test.players['3'].name).to.equal('rudan')
    expect(test.players['3'].color).to.equal('#3eb489')
  })
})
