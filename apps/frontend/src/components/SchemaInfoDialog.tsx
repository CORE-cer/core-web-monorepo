import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import type { StreamType } from '@/types';
import { getSchemaInfo, type FAQItem } from '@/data/faq';
import DIDLookup from '@/components/DIDLookup';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`schema-info-tabpanel-${index}`}
      aria-labelledby={`schema-info-tab-${index}`}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `schema-info-tab-${index}`,
    'aria-controls': `schema-info-tabpanel-${index}`,
  };
}

type FAQSectionProps = {
  items: FAQItem[];
};

function FAQSection({ items }: FAQSectionProps) {
  return (
    <Box>
      {items.map((item) => (
        <Accordion 
          key={item.id}
          sx={{ 
            mb: 1,
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              margin: '0 0 8px 0',
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${item.id}-content`}
            id={`panel-${item.id}-header`}
            sx={{
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                gap: 1
              }
            }}
          >
            <Typography variant="subtitle1" component="div" sx={{ fontWeight: 500 }}>
              {item.question}
            </Typography>
            {item.category && (
              <Chip 
                label={item.category} 
                size="small" 
                variant="outlined"
                sx={{ ml: 'auto' }}
              />
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

type SchemaInfoDialogProps = {
  open: boolean;
  onClose: () => void;
  streamType: StreamType;
};

export default function SchemaInfoDialog({ open, onClose, streamType }: SchemaInfoDialogProps) {
  const [value, setValue] = useState(0);
  const schemaInfo = getSchemaInfo(streamType);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!schemaInfo) {
    return null;
  }

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          height: '80vh',
          maxHeight: '80vh'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        pb: 1
      }}>
        <Box>
          <Typography variant="h5" component="div" sx={{ fontWeight: 500 }}>
            {schemaInfo.overview}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {schemaInfo.description}
          </Typography>
        </Box>
        <IconButton 
          aria-label="close" 
          onClick={onClose}
          sx={{ ml: 2 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden',
        p: 0
      }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 3 }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="Schema info sections"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="FAQ" {...a11yProps(1)} />
            {streamType === 'bluesky' && <Tab label="DID Lookup" {...a11yProps(2)} />}
          </Tabs>
        </Box>

        <Box sx={{ 
          flex: 1, 
          overflow: 'auto',
          px: 3,
          pb: 2
        }}>
          <TabPanel value={value} index={0}>
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                About {schemaInfo.overview}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 3 }}>
                {schemaInfo.description}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, mt: 3 }}>
                Getting Started
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                Explore the examples in the Query tab to see how to work with {streamType} data. 
                Each example demonstrates different patterns and use cases for this stream type. 
                You can modify these examples or create your own queries to analyze the data.
              </Typography>
            </Box>
          </TabPanel>
          
          <TabPanel value={value} index={1}>
            <FAQSection items={schemaInfo.faqs} />
          </TabPanel>
          
          {streamType === 'bluesky' && (
            <TabPanel value={value} index={2}>
              <DIDLookup />
            </TabPanel>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
