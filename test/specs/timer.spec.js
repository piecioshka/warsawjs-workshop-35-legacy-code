const Timer = require('../../src/pomodoro/timer');

describe('Timer', () => {
    let $item = null;
    let timer = null;

    beforeEach(() => {
        $item = document.createElement('ciasteczko');

        const $resetButton = document.createElement('div');
        $resetButton.id = 'resetBttn';
        document.body.append($resetButton);

        timer = new Timer();
    });

    describe('decreaseElementNumber', () => {
        it('should reduce value', () => {
            // Arrange
            $item.textContent = '76';
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('75');
            // Teardown
            // ...
        });
        it('should return MINIMUM_CLOCK_VALUE when pass 0', () => {
            $item.textContent = '0';
            timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('0');
        });
        it('should return MINIMUM_CLOCK_VALUE when pass -1', () => {
            $item.textContent = '-1';
            timer.decreaseElementNumber($item);
            expect($item.textContent).toEqual('0');
        });
        it('should throw an exception when HTMLElement does not have number as a value', () => {
            $item.textContent = 'ciasteczko';
            expect(() => {
                timer.decreaseElementNumber($item);
            }).toThrow();
        });
    });

    describe('increaseElementNumber', () => {
        it('should increase value', () => {
            // Arrange
            $item.textContent = '14';
            // Act
            timer.increaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('15');
            // Teardown
            // ...
        });
        it('should returns MAXIMUM_CLOCK_VALUE when pass number out of range', () => {
            $item.textContent = '100';
            timer.increaseElementNumber($item);
            expect($item.textContent).toEqual('60');
        });
        it('should throw an exception when HTMLElement does not have number as a value', () => {
            $item.textContent = 'ciasteczko';
            expect(() => {
                timer.increaseElementNumber($item);
            }).toThrow();
        });
    });

    describe('startTimer', () => {
        it('should call "_startCounter"', () => {
            // Arrange
            const $break = document.createElement('break');
            $break.textContent = '1';
            const $session = document.createElement('session');
            $session.textContent = '1';

            timer._startCounter = jest.fn();
            jest.spyOn(timer, '_startCounter');

            // Act
            timer.startTimer($break, $session);

            // Assert
            expect(timer._startCounter).toHaveBeenCalled();
            expect(timer._startCounter).toHaveBeenCalledTimes(1);
            expect(timer._startCounter).toHaveBeenCalledWith(
                Timer.ONE_MINUTE_IN_MILLISECONDS,
                Timer.ONE_MINUTE_IN_MILLISECONDS
            );
        });
    });
});
