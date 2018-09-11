import Store from "../../../src/app/modules/Store";

describe('Store', () => {
    it('sets items and gets items', () => {
        Store.set('foo', 'x', 'bar', 'y');
        expect(Store.get('foo')).toEqual('x');
        expect(Store.get('bar')).toEqual('y');
    });

    it('removes items', () => {
        Store.set('foo', 'x', 'bar', 'y');
        Store.remove('foo', 'bar');
        expect(Store.get('foo')).toEqual(null);
        expect(Store.get('bar')).toEqual(null);
    });

    it('pops items', () => {
        Store.set('foo', 'x', 'bar', 'y');

        expect(Store.pop('foo')).toEqual('x');
        expect(Store.get('foo')).toEqual(null);

        expect(Store.pop('bar')).toEqual('y');
        expect(Store.get('bar')).toEqual(null);
    })
});
