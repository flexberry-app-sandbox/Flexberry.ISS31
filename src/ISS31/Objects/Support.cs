﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS31
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Support.
    /// </summary>
    // *** Start programmer edit section *** (Support CustomAttributes)

    // *** End programmer edit section *** (Support CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("SupportE", new string[] {
            "Name as \'Name\'",
            "Description as \'Description\'",
            "Form as \'Form\'",
            "Form.Name as \'Name\'"}, Hidden=new string[] {
            "Form.Name"})]
    [AssociatedDetailViewAttribute("SupportE", "ListInv", "ListInvE", true, "", "List inv", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("SupportE", "ListSize", "ListSizeE", true, "", "List size", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("SupportE", "Form", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("SupportL", new string[] {
            "Name as \'Name\'",
            "Description as \'Description\'",
            "Form.Name as \'Name\'"})]
    public class Support : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fDescription;
        
        private IIS.ISS31.Form fForm;
        
        private IIS.ISS31.DetailArrayOfListInv fListInv;
        
        private IIS.ISS31.DetailArrayOfListSize fListSize;
        
        // *** Start programmer edit section *** (Support CustomMembers)

        // *** End programmer edit section *** (Support CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Support.Name CustomAttributes)

        // *** End programmer edit section *** (Support.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Support.Name Get start)

                // *** End programmer edit section *** (Support.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Support.Name Get end)

                // *** End programmer edit section *** (Support.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Name Set start)

                // *** End programmer edit section *** (Support.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Support.Name Set end)

                // *** End programmer edit section *** (Support.Name Set end)
            }
        }
        
        /// <summary>
        /// Description.
        /// </summary>
        // *** Start programmer edit section *** (Support.Description CustomAttributes)

        // *** End programmer edit section *** (Support.Description CustomAttributes)
        [StrLen(255)]
        public virtual string Description
        {
            get
            {
                // *** Start programmer edit section *** (Support.Description Get start)

                // *** End programmer edit section *** (Support.Description Get start)
                string result = this.fDescription;
                // *** Start programmer edit section *** (Support.Description Get end)

                // *** End programmer edit section *** (Support.Description Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Description Set start)

                // *** End programmer edit section *** (Support.Description Set start)
                this.fDescription = value;
                // *** Start programmer edit section *** (Support.Description Set end)

                // *** End programmer edit section *** (Support.Description Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.Form CustomAttributes)

        // *** End programmer edit section *** (Support.Form CustomAttributes)
        [NotNull()]
        public virtual IIS.ISS31.Form Form
        {
            get
            {
                // *** Start programmer edit section *** (Support.Form Get start)

                // *** End programmer edit section *** (Support.Form Get start)
                IIS.ISS31.Form result = this.fForm;
                // *** Start programmer edit section *** (Support.Form Get end)

                // *** End programmer edit section *** (Support.Form Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.Form Set start)

                // *** End programmer edit section *** (Support.Form Set start)
                this.fForm = value;
                // *** Start programmer edit section *** (Support.Form Set end)

                // *** End programmer edit section *** (Support.Form Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListInv CustomAttributes)

        // *** End programmer edit section *** (Support.ListInv CustomAttributes)
        public virtual IIS.ISS31.DetailArrayOfListInv ListInv
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListInv Get start)

                // *** End programmer edit section *** (Support.ListInv Get start)
                if ((this.fListInv == null))
                {
                    this.fListInv = new IIS.ISS31.DetailArrayOfListInv(this);
                }
                IIS.ISS31.DetailArrayOfListInv result = this.fListInv;
                // *** Start programmer edit section *** (Support.ListInv Get end)

                // *** End programmer edit section *** (Support.ListInv Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListInv Set start)

                // *** End programmer edit section *** (Support.ListInv Set start)
                this.fListInv = value;
                // *** Start programmer edit section *** (Support.ListInv Set end)

                // *** End programmer edit section *** (Support.ListInv Set end)
            }
        }
        
        /// <summary>
        /// Support.
        /// </summary>
        // *** Start programmer edit section *** (Support.ListSize CustomAttributes)

        // *** End programmer edit section *** (Support.ListSize CustomAttributes)
        public virtual IIS.ISS31.DetailArrayOfListSize ListSize
        {
            get
            {
                // *** Start programmer edit section *** (Support.ListSize Get start)

                // *** End programmer edit section *** (Support.ListSize Get start)
                if ((this.fListSize == null))
                {
                    this.fListSize = new IIS.ISS31.DetailArrayOfListSize(this);
                }
                IIS.ISS31.DetailArrayOfListSize result = this.fListSize;
                // *** Start programmer edit section *** (Support.ListSize Get end)

                // *** End programmer edit section *** (Support.ListSize Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Support.ListSize Set start)

                // *** End programmer edit section *** (Support.ListSize Set start)
                this.fListSize = value;
                // *** Start programmer edit section *** (Support.ListSize Set end)

                // *** End programmer edit section *** (Support.ListSize Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "SupportE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SupportE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SupportE", typeof(IIS.ISS31.Support));
                }
            }
            
            /// <summary>
            /// "SupportL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SupportL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SupportL", typeof(IIS.ISS31.Support));
                }
            }
        }
    }
}
