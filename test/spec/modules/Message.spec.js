describe('Message', () => {
    let Message, successBox, errorBox;

    document.body.innerHTML = '<div id="app_errors"></div><div id="app_success"></div>';
    // Message can only be referenced after loading html because it's initialization
    // requires success and error boxes.
    Message = require('../../../src/app/modules/Message').default;
    successBox = document.getElementById('app_success');
    errorBox = document.getElementById('app_errors');

    it('shows success messages', () => {
        Message.success('Something awesome happened :)');
        expect(successBox.innerHTML).toContain('Something awesome happened :)');
    });

    it('shows many success messages', () => {
        Message.success(['Foo :)', 'Bar :)']);
        expect(successBox.innerHTML).toContain('Foo :)');
        expect(successBox.innerHTML).toContain('Bar :)');
    });

    it('shows error messages', () => {
        Message.error('Something bad happened :(');
        expect(errorBox.innerHTML).toContain('Something bad happened :(');
    });

    it('shows many error messages', () => {
        Message.error(['Foo :)', 'Bar :)']);
        expect(errorBox.innerHTML).toContain('Foo :)');
        expect(errorBox.innerHTML).toContain('Bar :)');
    });

    it('clears success messages', () => {
        Message.success('Foo :)');
        expect(successBox.innerHTML).toContain('Foo :)');
        Message.clear();
        expect(successBox.innerHTML).toContain('');
    });

    it('clears error messages', () => {
        Message.error('Bar :)');
        expect(errorBox.innerHTML).toContain('Bar :)');
        Message.clear();
        expect(errorBox.innerHTML).toContain('');
    })
});
