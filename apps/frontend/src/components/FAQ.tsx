import { type FAQItem, globalFAQ } from '@/data/faq';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Container, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`faq-tabpanel-${index.toString()}`} aria-labelledby={`faq-tab-${index.toString()}`}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `faq-tab-${index.toString()}`,
    'aria-controls': `faq-tabpanel-${index.toString()}`,
  };
}

type FAQSectionProps = {
  items: FAQItem[];
  title: string;
};

function FAQSection({ items, title }: FAQSectionProps) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 500 }}>
        {title}
      </Typography>
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
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${item.id}-content`}
            id={`panel-${item.id}-header`}
            sx={{
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                gap: 2,
              },
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
              {item.question}
            </Typography>
            {item.category && <Chip label={item.category} size="small" variant="outlined" sx={{ ml: 'auto' }} />}
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default function FAQ() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          flex: '1 1 auto',
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          py: 3,
        }}
      >
        <Container
          component="main"
          maxWidth="lg"
          sx={{
            overflow: 'auto',
            flex: '1 1 auto',
            minHeight: 0,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 500 }}>
            Frequently Asked Questions
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs value={value} onChange={handleChange} aria-label="FAQ sections" variant="scrollable" scrollButtons="auto">
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="CEQL Language" {...a11yProps(1)} />
              <Tab label="Technical" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <FAQSection items={globalFAQ.general} title="General Questions" />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <FAQSection items={globalFAQ.ceql} title="CEQL Query Language" />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <FAQSection items={globalFAQ.technical} title="Technical Information" />
          </TabPanel>
        </Container>
      </Box>
    </Box>
  );
}
