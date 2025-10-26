"use client";

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Active Guards */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(253, 197, 26, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(253, 197, 26, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.08)';
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6c757d', marginBottom: '8px' }}>Active Guards</p>
            <p style={{ fontSize: '2rem', fontWeight: '700', color: '#1e2247' }}>{stats.activeGuards}</p>
          </div>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, #1e2247 0%, #252958 100%)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 15px rgba(30, 34, 71, 0.3)'
          }}>
            <svg style={{ width: '28px', height: '28px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <span style={{ color: '#28a745', fontSize: '0.875rem', fontWeight: '600' }}>+4 today</span>
          <span style={{ color: '#6c757d', fontSize: '0.875rem', marginLeft: '8px' }}>On duty</span>
        </div>
      </div>

      {/* Total Bookings */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.08)';
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6c757d', marginBottom: '8px' }}>Total Bookings</p>
            <p style={{ fontSize: '2rem', fontWeight: '700', color: '#1e2247' }}>{stats.totalBookings}</p>
          </div>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 15px rgba(253, 197, 26, 0.4)'
          }}>
            <svg style={{ width: '28px', height: '28px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <span style={{ color: '#28a745', fontSize: '0.875rem', fontWeight: '600' }}>+18.5%</span>
          <span style={{ color: '#6c757d', fontSize: '0.875rem', marginLeft: '8px' }}>from last month</span>
        </div>
      </div>

      {/* Pending Quotations */}
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 15px rgba(30, 34, 71, 0.08)',
        border: '2px solid rgba(30, 34, 71, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(253, 197, 26, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(30, 34, 71, 0.08)';
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#6c757d', marginBottom: '8px' }}>Pending Quotes</p>
            <p style={{ fontSize: '2rem', fontWeight: '700', color: '#1e2247' }}>{stats.pendingQuotations}</p>
          </div>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'rgba(253, 197, 26, 0.15)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(253, 197, 26, 0.3)'
          }}>
            <svg style={{ width: '28px', height: '28px', color: '#fdc51a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
          <span style={{ color: '#ffc107', fontSize: '0.875rem', fontWeight: '600' }}>Needs attention</span>
          <span style={{ color: '#6c757d', fontSize: '0.875rem', marginLeft: '8px' }}>Review pending</span>
        </div>
      </div>

      {/* Monthly Revenue */}
      <div style={{
        background: 'linear-gradient(135deg, #1e2247 0%, #252958 100%)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 8px 25px rgba(30, 34, 71, 0.3)',
        border: '2px solid rgba(253, 197, 26, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 35px rgba(30, 34, 71, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 34, 71, 0.3)';
      }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(253, 197, 26, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          <div>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#fdc51a', marginBottom: '8px' }}>Monthly Revenue</p>
            <p style={{ fontSize: '1.75rem', fontWeight: '700', color: 'white' }}>${stats.monthlyRevenue.toLocaleString()}</p>
          </div>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, #fdc51a 0%, #e7b80f 100%)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 15px rgba(253, 197, 26, 0.5)'
          }}>
            <svg style={{ width: '28px', height: '28px', color: '#1e2247' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', position: 'relative' }}>
          <span style={{ color: '#fdc51a', fontSize: '0.875rem', fontWeight: '700' }}>+24.8%</span>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginLeft: '8px' }}>vs last month</span>
        </div>
      </div>
    </div>
  );
}

