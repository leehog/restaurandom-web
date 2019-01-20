import { expect } from 'chai'
import { GenreList, GenreListProps } from './index'

describe('Sidebar functionality', () => {
    it('Should render genres list', () => {
        const subject = GenreList(GenreListProps)
        expect(subject).to.not.be.undefined
    })
})