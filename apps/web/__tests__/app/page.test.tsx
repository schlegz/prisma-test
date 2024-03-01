/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import IndexPage from '../../app/page';

describe('IndexPage', () => {
  it('should render the IndexPage page', async () => {
    const { getByText, container } = render(<IndexPage />);

    expect(container).toMatchSnapshot();
  });
});
