# Browser Extensions Manager

A modern web application for managing browser extensions with a clean, responsive interface and theme switching capabilities.

![Extensions Manager Screenshot](./screenshot.png)

## Features

- **Extension Management**: View, toggle, and remove browser extensions
- **Filtering System**: Filter extensions by All, Active, or Inactive status
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices
- **Persistence**: Extension states saved across browser sessions using localStorage

## Technologies Used

- **React**: Frontend UI library
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/extensions-manager.git
   cd extensions-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
extensions-manager/
├── public/                 # Public assets
├── src/                    # Source files
│   ├── assets/             # Static assets (images, icons)
│   ├── components/         # React components
│   │   ├── ExtensionCard.jsx    # Individual extension card
│   │   ├── ExtensionsList.jsx   # List of extensions with filtering
│   │   ├── FilterButtons.jsx    # Filter selection component
│   │   ├── Header.jsx           # App header with theme toggle
│   │   ├── RemoveButton.jsx     # Button to remove extensions
│   │   └── ToggleSwitch.jsx     # Toggle component for activation
│   ├── data/               # Data files
│   │   └── extensions.js   # Extensions data
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Usage

### Extension Cards

Each extension is displayed as a card showing:
- Extension icon
- Name and description
- Toggle switch to activate/deactivate
- Remove button to delete the extension

### Filtering

Use the filter buttons at the top to view:
- **All**: Display all extensions
- **Active**: Show only activated extensions
- **Inactive**: Show only deactivated extensions

### Theme Toggle

Click the sun/moon icon in the header to switch between light and dark themes.

## Customization

### Adding New Extensions

To add new extensions, edit the `src/data/extensions.js` file and add new objects following the existing pattern:

```javascript
{
    id: 13,
    icon: yourIconImport,
    name: 'Extension Name',
    desc: 'Extension description text',
    active: false,
}
```

## Future Enhancements

- Drag and drop reordering
- Extension categories/tags
- Search functionality
- Extension installation from a marketplace
- Usage statistics

## Credits

- Design inspiration from [Frontend Mentor](https://www.frontendmentor.io/)
- Icons from various sources

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Add a Screenshot

Replace the placeholder link at the top of this README with an actual screenshot of your application by:

1. Taking a screenshot of your application
2. Saving it as `screenshot.png` in the project root
3. Or update the image path in this README to match your screenshot's location
