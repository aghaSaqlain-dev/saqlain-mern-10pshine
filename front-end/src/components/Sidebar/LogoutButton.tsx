import { useAuth } from "../../context/useAuth";


export const LogoutButton = () =>{
    const {logout} = useAuth();
    return(
     <div
            style={{
              marginTop: 'auto',
              padding: '24px 0 8px 0',
              textAlign: 'center',
              borderTop: '1px solid #eee',
              background: 'rgba(255,255,255,0.95)'
            }}
          >
           <button
              style={{
                padding: '10px 28px',
                background: 'linear-gradient(90deg, #f44336 60%, #e57373 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '24px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(244,67,54,0.08)',
                transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
                letterSpacing: '1px',
                outline: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onClick={logout}
              onMouseOver={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #d32f2f 60%, #e57373 100%)';
                e.currentTarget.style.transform = 'translateY(-1px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(244,67,54,0.18)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #f44336 60%, #e57373 100%)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(244,67,54,0.08)';
              }}
              onMouseDown={e => {
                e.currentTarget.style.transform = 'scale(0.9)';
              }}
              onMouseUp={e => {
                e.currentTarget.style.transform = 'translateY(-1px) scale(1.04)';
              }}
            >
              <span style={{ fontSize: '1.2em', verticalAlign: 'middle' }}>🚪</span>
              Logout
            </button>
          </div>
    );
}