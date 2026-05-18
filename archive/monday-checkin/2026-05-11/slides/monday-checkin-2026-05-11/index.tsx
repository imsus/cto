import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#FAFAF8', text: '#1A1A1A', accent: '#22C55E' },
  fonts: {
    display: 'system-ui, -apple-system, sans-serif',
    body: 'system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 140, body: 36 },
  radius: 16,
};

const muted = '#6B7280';
const cardBg = '#FFFFFF';
const greenLight = '#DCFCE7';

const fill = {
  width: '100%',
  height: '100%',
} as const;

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: 24,
        color: 'var(--osd-accent)',
        letterSpacing: '0.15em',
        fontWeight: 600,
        marginBottom: 24,
      }}
    >
      WEEKLY UPDATE
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 800,
        margin: 0,
        lineHeight: 1.1,
      }}
    >
      Monday Checkin
    </h1>
    <p
      style={{
        fontSize: 32,
        color: muted,
        marginTop: 32,
        fontWeight: 400,
      }}
    >
      May 11, 2026
    </p>
  </div>
);

const NotableContributions: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 48,
      }}
    >
      <div
        style={{
          background: 'var(--osd-accent)',
          borderRadius: 12,
          padding: '12px 20px',
          fontSize: 24,
          fontWeight: 700,
          color: '#fff',
        }}
      >
        AI
      </div>
      <div>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 56,
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          AI Day
        </h2>
        <p style={{ fontSize: 28, color: muted, margin: '8px 0 0' }}>
          A day of prototyping & collaboration
        </p>
      </div>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
        marginTop: 16,
      }}
    >
      <div
        style={{
          background: cardBg,
          borderRadius: 20,
          padding: 40,
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--osd-accent)',
            marginBottom: 16,
          }}
        >
          Dewo
        </div>
        <p style={{ fontSize: 28, lineHeight: 1.5, margin: 0 }}>
          Prototyping HRIS and meeting notes → brief tools
        </p>
      </div>

      <div
        style={{
          background: cardBg,
          borderRadius: 20,
          padding: 40,
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--osd-accent)',
            marginBottom: 16,
          }}
        >
          El
        </div>
        <p style={{ fontSize: 28, lineHeight: 1.5, margin: 0 }}>
          Prototyping quotation + invoice engine
        </p>
      </div>

      <div
        style={{
          background: cardBg,
          borderRadius: 20,
          padding: 40,
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--osd-accent)',
            marginBottom: 16,
          }}
        >
          Base App
        </div>
        <p style={{ fontSize: 28, lineHeight: 1.5, margin: 0 }}>
          Shared auth, authorization & permission rules for future tools
        </p>
      </div>
    </div>
  </div>
);

const SupportNeeded: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 48,
      }}
    >
      <div
        style={{
          background: '#F59E0B',
          borderRadius: 12,
          padding: '12px 20px',
          fontSize: 24,
          fontWeight: 700,
          color: '#fff',
        }}
      >
        !
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 56,
          fontWeight: 800,
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        Support Needed
      </h2>
    </div>

    <div
      style={{
        background: cardBg,
        borderRadius: 20,
        padding: 48,
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        borderLeft: '6px solid #F59E0B',
      }}
    >
      <p style={{ fontSize: 36, fontWeight: 600, margin: '0 0 24px' }}>
        Old Lemon Server Maintenance
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 32, color: 'var(--osd-accent)' }}>→</span>
          <span style={{ fontSize: 32 }}>
            Ubuntu 20 → <strong>Ubuntu 24</strong>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 32, color: 'var(--osd-accent)' }}>→</span>
          <span style={{ fontSize: 32 }}>
            PHP 8.1 → <strong>PHP 8.4</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export const meta: SlideMeta = { title: 'Monday Checkin 2026-05-11' };
export default [Cover, NotableContributions, SupportNeeded] satisfies Page[];