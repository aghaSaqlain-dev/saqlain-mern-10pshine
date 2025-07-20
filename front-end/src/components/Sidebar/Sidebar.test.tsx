import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';

// Basic test for Sidebar rendering and collapse/expand

describe('Sidebar', () => {
  it('renders folder names when expanded', () => {
    render(<Sidebar />);
    // Expand the sidebar
    const collapseBtn = screen.getByTitle('Expand'); 
    fireEvent.click(collapseBtn);
    // dummy folders
    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Archive')).toBeInTheDocument();
  });

  it('hides folder names when collapsed', () => {
    render(<Sidebar />);
    // By default, collapsed is true
    expect(screen.queryByText('Personal')).not.toBeInTheDocument();
    expect(screen.queryByText('Work')).not.toBeInTheDocument();
  });

  it('shows collapse/expand button', () => {
    render(<Sidebar />);
    const collapseBtn = screen.getByRole('button');
    expect(collapseBtn).toBeInTheDocument();
    // Should show » when collapsed
    expect(collapseBtn).toHaveTextContent('»');
    // Expand and check for «
    fireEvent.click(collapseBtn);
    expect(collapseBtn).toHaveTextContent('«');
  });
});
