jest.dontMock('../Row');
describe(
    'Row',
    () => {
        const React = require('react');
        const ReactDOM = require('react-dom');
        const TestUtils = require('react/lib/ReactTestUtils');
        const Row = require('../Row');

        it('Should add "row" class', () => {
            const row = TestUtils.renderIntoDocument(<Row />);

            expect(ReactDOM.findDOMNode(row).className).toEqual('flex-row');
        });
        it('Should add "reverse" class if "reverse" property is true', () => {
            const row = TestUtils.renderIntoDocument(<Row reverse={true} />);

            expect(ReactDOM.findDOMNode(row).className).toContain('reverse');
        });
        it('Should not replace class', () => {
            const row = TestUtils.renderIntoDocument(<Row className="foo" />);
            const className = ReactDOM.findDOMNode(row).className;

            expect(className).toContain('foo');
            expect(className).toContain('flex-row');
        });
        it(
            'Should add modificators',
            () => {
                const row = TestUtils.renderIntoDocument(
                    <Row start="xs" center="sm" end="md" top="lg" middle="xs" bottom="sm" around="md" between="lg" first="xs" last="sm" />
                );
                const className = ReactDOM.findDOMNode(
                    row
                ).className;

                expect(
                    className
                ).toContain(
                    'flex-row'
                );
                expect(
                    className
                ).toContain(
                    'start-xs'
                );
                expect(
                    className
                ).toContain(
                    'center-sm'
                );
                expect(
                    className
                ).toContain(
                    'end-md'
                );
                expect(
                    className
                ).toContain(
                    'top-lg'
                );
                expect(
                    className
                ).toContain(
                    'middle-xs'
                );
                expect(
                    className
                ).toContain(
                    'bottom-sm'
                );
                expect(
                    className
                ).toContain(
                    'around-md'
                );
                expect(
                    className
                ).toContain(
                    'between-lg'
                );
                expect(
                    className
                ).toContain(
                    'first-xs'
                );
                expect(
                    className
                ).toContain(
                    'last-sm'
                );
            }
        );
    }
);
