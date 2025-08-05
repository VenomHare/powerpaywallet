import { Clock, ChevronDown, Zap, Bug, Plus, Shield, Sparkles } from "lucide-react";
import { useState } from "react";

const ChangelogCard = () => {

    // Hard-coded changelog data - update with each build
    const changelog = [
        {
            version: "v2.1.3",
            date: "2025-08-05",
            tag: "Latest",
            changes: [
                { type: "feature", text: "Added biometric authentication support" },
                { type: "improvement", text: "Enhanced transaction speed by 40%" },
                { type: "fix", text: "Fixed notification delivery issues" }
            ]
        },
        {
            version: "v2.1.2",
            date: "2025-07-28",
            tag: "Stable",
            changes: [
                { type: "feature", text: "New dark mode theme" },
                { type: "security", text: "Improved encryption protocols" },
                { type: "fix", text: "Resolved payment gateway timeout" }
            ]
        },
        {
            version: "v2.1.0",
            date: "2025-07-01",
            tag: null,
            changes: [
                { type: "feature", text: "Added transaction categorization" },
                { type: "improvement", text: "Redesigned user interface" }
            ]
        },
        {
            version: "v2.0.9",
            date: "2025-06-20",
            tag: null,
            changes: [
                { type: "fix", text: "Fixed memory leak in background sync" },
                { type: "security", text: "Updated SSL certificates" }
            ]
        },
        {
            version: "v2.0.9",
            date: "2025-06-20",
            tag: null,
            changes: [
                { type: "fix", text: "Fixed memory leak in background sync" },
                { type: "security", text: "Updated SSL certificates" }
            ]
        },
        {
            version: "v2.0.9",
            date: "2025-06-20",
            tag: null,
            changes: [
                { type: "fix", text: "Fixed memory leak in background sync" },
                { type: "security", text: "Updated SSL certificates" }
            ]
        },
        {
            version: "v2.0.8",
            date: "2025-06-10",
            tag: null,
            changes: [
                { type: "improvement", text: "Faster app startup time" },
                { type: "fix", text: "Resolved QR code scanning issues" }
            ]
        }
    ];

    const getChangeIcon = (type: string) => {
        switch (type) {
            case "feature": return <Plus className="w-3 h-3 text-green-600" />;
            case "fix": return <Bug className="w-3 h-3 text-red-600" />;
            case "improvement": return <Zap className="w-3 h-3 text-blue-600" />;
            case "security": return <Shield className="w-3 h-3 text-purple-600" />;
            default: return <Sparkles className="w-3 h-3 text-gray-600" />;
        }
    };

    const getChangeColor = (type: string) => {
        switch (type) {
            case "feature": return "text-green-700 bg-green-50";
            case "fix": return "text-red-700 bg-red-50";
            case "improvement": return "text-blue-700 bg-blue-50";
            case "security": return "text-purple-700 bg-purple-50";
            default: return "text-gray-700 bg-gray-50";
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="w-full h-full flex items-center justify-center text-center" style={{ gridArea: "changelog" }}>
            <div className="w-full h-full p-4 shadow-lg shadow-slate-400 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-300 flex flex-col">

                {/* Header */}
                <div className="mb-3">
                    <div className="flex items-center justify-center mb-2">
                        <Clock className="w-6 h-6 text-slate-600 mr-2" />
                        <h3 className="text-xl font-bold text-slate-800">Changelog</h3>
                    </div>
                    <p className="text-slate-600 text-sm">
                        Track all updates and improvements
                    </p>
                </div>

                {/* Scrollable Container */}
                <div className="flex-1 max-h-[60dvh] overflow-y-auto mb-3">
                    <div className="space-y-2">
                        {/* Always show first 2-3 versions */}
                        {changelog.map((version, versionIndex) => (
                            <div key={versionIndex} className="bg-white rounded-lg p-3 border border-slate-200">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center">
                                        <span className="font-bold text-slate-800 text-sm">{version.version}</span>
                                        {version.tag && (
                                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                                                {version.tag}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs text-slate-500">{formatDate(version.date)}</span>
                                </div>
                                <div className="space-y-1">
                                    {version.changes.map((change, changeIndex) => (
                                        <div key={changeIndex} className={`flex items-center text-xs p-1 rounded ${getChangeColor(change.type)}`}>
                                            {getChangeIcon(change.type)}
                                            <span className="ml-1">{change.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangelogCard;