import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

type BlueskyProfile = {
  did: string;
  handle: string;
  displayName?: string;
  avatar?: string;
  description?: string;
  followersCount: number;
  followsCount: number;
  postsCount: number;
  createdAt: string;
  indexedAt: string;
  associated?: {
    lists: number;
    feedgens: number;
    starterPacks: number;
    labeler: boolean;
  };
  labels?: any[];
};

export default function DIDLookup() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<BlueskyProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async () => {
    if (!input.trim()) {
      setError('Please enter a DID or handle');
      return;
    }

    setLoading(true);
    setError(null);
    setProfile(null);

    try {
      const cleanInput = input.trim();
      const url = `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${encodeURIComponent(cleanInput)}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json() as BlueskyProfile;
      setProfile(data);
    } catch (err) {
      console.error('DID lookup error:', err);
      setError(err instanceof Error ? err.message : 'Failed to lookup profile');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleLookup();
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
        DID/Handle Lookup
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
        Enter a Bluesky DID (did:plc:...) or handle (username.bsky.social) to get profile information.
        This helps you understand the human-readable context behind DIDs you see in event streams.
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="did:plc:ovwabcu6febdpxar2diytg2s or starchann.bsky.social"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
          error={!!error}
          helperText={error}
        />
        <Button
          variant="contained"
          onClick={handleLookup}
          disabled={loading || !input.trim()}
          startIcon={loading ? <CircularProgress size={16} /> : <SearchIcon />}
          sx={{ minWidth: 100 }}
        >
          {loading ? 'Looking up...' : 'Lookup'}
        </Button>
      </Box>

      {profile && (
        <Card variant="outlined">
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Avatar
                src={profile.avatar}
                sx={{ width: 56, height: 56 }}
              >
                <PersonIcon />
              </Avatar>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {profile.displayName || profile.handle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @{profile.handle}
                </Typography>
                {profile.description && (
                  <Typography variant="body2" sx={{ mt: 1, lineHeight: 1.5 }}>
                    {profile.description}
                  </Typography>
                )}
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 2, mb: 2 }}>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  Posts
                </Typography>
                <Typography variant="body2" fontWeight="500">
                  {formatNumber(profile.postsCount)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  Followers
                </Typography>
                <Typography variant="body2" fontWeight="500">
                  {formatNumber(profile.followersCount)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  Following
                </Typography>
                <Typography variant="body2" fontWeight="500">
                  {formatNumber(profile.followsCount)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" color="text.secondary" display="block">
                  Joined
                </Typography>
                <Typography variant="body2" fontWeight="500">
                  {formatDate(profile.createdAt)}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                DID
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  wordBreak: 'break-all',
                  backgroundColor: 'action.hover',
                  p: 1,
                  borderRadius: 1,
                }}
              >
                {profile.did}
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Link
                href={`https://bsky.app/profile/${profile.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
              >
                View on Bluesky →
              </Link>
            </Box>
          </CardContent>
        </Card>
      )}

      {!profile && !loading && !error && (
        <Alert severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Examples:</strong>
            <br />
            • DID: <code>did:plc:ovwabcu6febdpxar2diytg2s</code>
            <br />
            • Handle: <code>starchann.bsky.social</code>
          </Typography>
        </Alert>
      )}
    </Box>
  );
}
