            where: {},
            defaults: {}
        });
        return settings;
    } catch (error) {
        console.error('Error getting AutoBio settings:', error);
        return { status: 'on', message: '🌟 Always active!', timezone: 'Africa/Nairobi' };
    }
}

async function updateAutoBioSettings(updates) {
    try {
        const settings = await getAutoBioSettings();
        return await settings.update(updates);
    } catch (error) {
        console.error('Error updating AutoBio settings:', error);
        return null;
    }
}

module.exports = {
    initAutoBioDB,
    getAutoBioSettings,
    updateAutoBioSettings,
    AutoBioDB
};
