import {has, timeSince} from "../../src/app/helpers";

describe('has', () => {
    it('returns true if prop is set', () => {
        expect(has('foo', {foo: 'Bar'})).toEqual(true);
    });

    it('returns false if prop is not set', () => {
        expect(has('foo', {})).toEqual(false);
    });

    it('returns false if prop is set to undefined', () => {
        expect(has('foo', {foo: undefined})).toEqual(false);
    });

    it('returns false if prop is set to null', () => {
        expect(has('foo', {foo: null})).toEqual(false);
    });
});

describe('timeSince', () => {
    it('gets years elapsed', () => {
        let date = new Date(new Date().setFullYear(new Date().getFullYear() - 12));
        expect(timeSince(date)).toEqual('12 years ago');
    });

    it('gets months  elapsed', () => {
        let date = new Date(new Date().setMonth(new Date().getMonth() - 5));
        expect(timeSince(date)).toEqual('5 months ago');
    });

    it('gets days  elapsed', () => {
        let date = new Date(new Date().setDate(new Date().getDate() - 20));
        expect(timeSince(date)).toEqual('20 days ago');
    });

    it('gets hours  elapsed', () => {
        let date = new Date(new Date().setHours(new Date().getHours() - 7));
        expect(timeSince(date)).toEqual('7 hours ago');
    });

    it('gets minutes  elapsed', () => {
        let date = new Date(new Date().setMinutes(new Date().getMinutes() - 30));
        expect(timeSince(date)).toEqual('30 minutes ago');
    });

    it('gets seconds  elapsed', () => {
        let date = new Date(new Date().setSeconds(new Date().getSeconds() - 15));
        expect(timeSince(date)).toEqual('15 seconds ago');
    });
});
