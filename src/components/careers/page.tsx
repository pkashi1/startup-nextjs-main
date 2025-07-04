"use client";

import React, { useState, useRef } from "react";
import { MapPin, Clock } from "lucide-react";
import { t, jobOpeningsEn, jobOpeningsEs } from "@/types/careerData";

const CareersPage: React.FC = () => {
  const [lang, setLang] = useState<"en" | "es">("en");
  const L = t[lang];
  const jobs = lang === "en" ? jobOpeningsEn : jobOpeningsEs;

  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [viewDetailsJob, setViewDetailsJob] = useState<number | null>(null);
  const applicationFormRef = useRef<HTMLElement>(null);

  const handleApplyClick = (jobId: number) => {
    setSelectedJob(jobId);
    setTimeout(() => {
      applicationFormRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div
      suppressHydrationWarning={true}
      className="pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Language Toggle */}
      <div className="flex justify-end space-x-2 p-4">
        {(["en", "es"] as const).map((code) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`px-3 py-1 rounded ${
              lang === code
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {L.langLabel[code]}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section
        className="py-20 text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(/images/Gemini_Generated_Image_bjxysubjxysubjxy.png)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-3">
            {L.joinTitle}
          </h1>
          <p className="text-xl text-gray-300">{L.joinSubtitle}</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">{L.whyTitle}</h2>
          <p className="mb-4 text-lg leading-relaxed">{L.why1}</p>
          <p className="mb-4 text-lg leading-relaxed">{L.why2}</p>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs[0].benefits.map((benefit, i) => (
            <div
              key={i}
              className="p-6 shadow-md rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              <h3 className="text-lg font-bold">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {L.openingsTitle}
          </h2>
          {jobs.map((job) => (
            <div
              key={job.id}
              className="mb-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                  <p className="text-sm flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="mr-2" />
                    {job.location}
                    <Clock className="ml-4 mr-2" />
                    {L.posted} {job.postDate}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 space-x-2">
                  <button
                    className="px-4 py-2 border border-primary rounded hover:bg-primary hover:text-white transition"
                    onClick={() =>
                      setViewDetailsJob(
                        viewDetailsJob === job.id ? null : job.id
                      )
                    }
                  >
                    {viewDetailsJob === job.id
                      ? L.hideDetails
                      : L.viewDetails}
                  </button>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
                    onClick={() => handleApplyClick(job.id)}
                  >
                    {L.apply}
                  </button>
                </div>
              </div>
              {viewDetailsJob === job.id && (
                <div className="border-t mt-4 pt-4">
                  <p className="mb-4">{job.description}</p>
                  <h4 className="font-bold">{L.requirements}</h4>
                  <ul className="list-disc ml-5 mb-4">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      {selectedJob && (
        <section
          ref={applicationFormRef}
          className="py-16 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded shadow">
            <h3 className="text-2xl font-semibold mb-4">
              {L.applyFor}{" "}
              {jobs.find((j) => j.id === selectedJob)?.title}
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder={L.fullName}
                className="w-full p-3 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder={L.email}
                className="w-full p-3 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder={L.phone}
                className="w-full p-3 border rounded"
              />
              <textarea
                name="experience"
                placeholder={L.experience}
                className="w-full p-3 border rounded"
                rows={3}
              />
              <textarea
                name="message"
                placeholder={L.coverLetter}
                className="w-full p-3 border rounded"
                rows={4}
              />
              <input
                type="file"
                name="resume"
                className="w-full p-3 border rounded"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded"
              >
                {L.submit}
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default CareersPage;
