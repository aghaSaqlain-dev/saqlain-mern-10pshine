import { formatDate } from "./dateFormat";

describe('formatDate', () => {
  it('should format the date correctly', () => {
    const date = new Date('2023-03-15T12:00:00Z');
    expect(formatDate(date.toString())).toBe('Mar 15, 2023, 05:00 PM');
  });
});
